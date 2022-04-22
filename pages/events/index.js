import { useRouter } from "next/router";

import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const EventsPage = () => {
  const { push } = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    push(fullPath).then();
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
