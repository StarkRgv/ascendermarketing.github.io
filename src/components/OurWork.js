import React, { useEffect, useState, useMemo, useCallback } from "react";
import { fetchData } from "../api/api";
import { API } from "../constants";
import ImageGallery from "../shared/ImageGallery";
import ErrorMessage from "./ErrorMessage";

const OurWork = () => {
  const [eventsData, setEventsData] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const [eventId, setEventId] = useState("all");
  const [loading, setLoading] = useState(true);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to fetch event images
  const fetchEventImages = async (acfArr) => {
    const images = await Promise.all(
      acfArr.map(async (item) => {
        const result = await fetchData(
          `media/${item.event_images_by_category}`
        );
        return {
          alt_text: result.title.rendered,
          source_url: result.source_url,
        };
      })
    );
    return images;
  };

  // Fetch events data
  useEffect(() => {
    const getEventsData = async () => {
      try {
        const result = await fetchData(API.EVENTS);
        setEventsData(result);
      } catch (error) {
        setError("Failed to load events data.");
        console.error("Error fetching events data:", error);
      } finally {
        setLoading(false);
      }
    };

    getEventsData();
  }, []);

  // Fetch images based on the selected eventId
  useEffect(() => {
    if (!eventsData) return; // Skip if eventsData hasn't loaded

    const getEventImages = async () => {
      setImagesLoading(true);
      setError(null); // Reset error state on each fetch attempt
      let images = [];

      try {
        if (eventId === "all") {
          const allImages = await Promise.all(
            eventsData.flatMap(async (event) => {
              const acfArr = event?.acf.event_images || [];
              return await fetchEventImages(acfArr);
            })
          );
          images = allImages.flat();
        } else {
          const selectedEvent = eventsData.find(
            (event) => event.id === eventId
          );
          const acfArr = selectedEvent?.acf.event_images || [];
          images = await fetchEventImages(acfArr);
        }

        setEventImages(images);
      } catch (error) {
        setError("Failed to load event images.");
        console.error("Error fetching images:", error);
      } finally {
        setImagesLoading(false);
      }
    };

    getEventImages();
  }, [eventId, eventsData]);

  // Memoized rendering of event buttons
  const renderButtons = useMemo(() => {
    if (!eventsData) return null;
    return (
      <>
        <div className="d-flex flex-wrap justify-content-center mt-4 responsive-buttons">
          <div
            className={`work-section-button border rounded py-1 px-3 mx-2 pointer ${
              eventId === "all" ? "active" : ""
            }`}
            onClick={() => setEventId("all")}
          >
            All
          </div>
          {eventsData.map((event) => (
            <div
              key={event.id}
              className={`work-section-button border rounded py-1 px-3 mx-2 pointer ${
                eventId === event.id ? "active" : ""
              }`}
              onClick={() => setEventId(event.id)}
            >
              {event.title.rendered}
            </div>
          ))}
        </div>
      </>
    );
  }, [eventId, eventsData]);

  // Handle click events with useCallback to prevent unnecessary re-renders
  const handleEventClick = useCallback((id) => setEventId(id), []);

  return (
    <section
      id="workSection"
      className="ascender-dark m-auto py-5 text-white text-center"
    >
      <div className="container">
        <h1 className="text-bold">Our Work</h1>
        <p>
          Join hands with Ascender Marketing to transform your ideas into
          extraordinary realities. Our work reflects commitment and passion
          towards each event and crafts unforgettable experiences for our
          clients and their audience.
          <br />
          <br />
          Live this excellence of seamless execution and unique solutions that
          have accumulated trust from countless clients. Help us help you make
          all your events shine from intimate gatherings to grand-scale
          celebrations, as we embark on a beautiful journey of chasing dreams!
        </p>

        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        )}
        {error && <ErrorMessage message="Failed to fetch Work data" />}
        {!loading && !error && (
          <>
            <div className="d-flex align-items-center justify-content-center mt-5">
              {renderButtons}
            </div>

            <ImageGallery images={eventImages} imagesLoading={imagesLoading} />
          </>
        )}
      </div>
    </section>
  );
};

export default OurWork;
