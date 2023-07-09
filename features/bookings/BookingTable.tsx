'use client'
import React from "react";

import Menu from "@/components/Menu";
import Table from "@/components/Table";
import BookingRow, { ExtendedBooking } from "./BookingRow";

import { useBookings } from "./hooks/useBookings";

const BookingTable = () => {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <p>Loading...</p>;

  if (!bookings) return <p>No bookings could be found</p>;

  return (
    <Menu>
      <Table
        className="bg-white w-full"
        columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem"
      >
        <Table.Header>
          <h4 role="rowHeader">Cabin</h4>
          <h4 role="rowHeader">Guest</h4>
          <h4 role="rowHeader">Dates</h4>
          <h4 role="rowHeader">Status</h4>
          <h4 role="rowHeader">Amount</h4>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking: ExtendedBooking) => (
            <BookingRow key={booking.id} booking={booking } />
          )}
        />
      </Table>
    </Menu>
  );
};

export default BookingTable;
