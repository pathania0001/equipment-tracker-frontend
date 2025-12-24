import { useState } from "react";
import SearchBar from "../components/booking/SearchBar";
import CourtsGrid from "../components/booking/CourtsGrid";
import CoachesGrid from "../components/booking/CoachesGrid";
import EquipmentSelector from "../components/booking/EquipmentSelector";
import BookingSummary from "../components/booking/BookingSummary";
import Button from "../components/ui/Button";
import { toast } from "react-toastify";
import { useAvailability } from "../hooks/useAvailability";
import { createBooking } from "../api/booking.api";

export default function BookingPage() {
  const { data, search, clear } = useAvailability();
  // console.log("data :",data)
  const [searchParams, setSearchParams] = useState({
    date: "",
    startTime: "",
    endTime: ""
  });

  const [booking, setBooking] = useState({
    equipment: []
  });

  const handleEquipment = (id, qty) => {
    setBooking(b => ({
      ...b,
      equipment: [
        ...(b.equipment || []).filter(e => e.equipmentId !== id),
        { equipmentId: id, quantity: qty }
      ]
    }));
  };

  const handleBooking = async () => {
    try {
      await createBooking(booking);
      toast.success("Booking confirmed 🎉");

      setBooking({ equipment: [] });
      setSearchParams({ date: "", startTime: "", endTime: "" });
      clear();
    } catch (err) {
      toast.error(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <>
      <SearchBar
        values={searchParams}
        onChange={setSearchParams}
        onSearch={() => {
          setBooking(b => ({ ...b, ...searchParams }));
          search(searchParams);
        }}
      />

      {data && (
        <>
          <CourtsGrid
            courts={data.courts}
            selectedCourtId={booking.courtId}
            onSelect={id =>
              setBooking(b => ({ ...b, courtId: id }))
            }
          />

          <CoachesGrid
            coaches={data.coaches}
            selectedCoachId={booking.coachId}
            onSelect={id =>
              setBooking(b => ({ ...b, coachId: id || null }))
            }
          />

          <EquipmentSelector
            equipment={data.equipment}
            onChange={handleEquipment}
          />

          <BookingSummary booking={booking} data={data}/>

          <Button onClick={handleBooking}>
            Confirm Booking
          </Button>
        </>
      )}
    </>
  );
}
