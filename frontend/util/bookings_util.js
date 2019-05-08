
export const createBooking = booking => {
    return (
        $.ajax({
            method: "POST",
            url: "api/bookings",
            data: { booking }
        })
    );
};