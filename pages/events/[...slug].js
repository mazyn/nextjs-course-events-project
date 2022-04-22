import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";

const FilteredEventsPage = () => {
  const {
    query: { slug: filterData },
  } = useRouter();

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter, please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
