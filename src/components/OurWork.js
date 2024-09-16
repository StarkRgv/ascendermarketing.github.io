import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { API } from "../constants";
import ImageGallery from "../shared/ImageGallery";

const OurWork = () => {
  const [eventsData, setEventsData] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const [eventId, setEventId] = useState("all");
  const [loading, setLoading] = useState(true);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEventsData = async () => {
      try {
        const result = await fetchData(API.EVENTS);
        setEventsData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getEventsData();
  }, []);

  // Fetch images based on the selected eventId when either eventId or eventsData changes
  useEffect(() => {
    const getEventImages = async () => {
      if (!eventsData) return;

      let images = [];
      setImagesLoading(true);
      try {
        if (eventId === "all") {
          // Fetch images for all events
          for (const event of eventsData) {
            const resp = await fetchData(`media?parent=${event.id}`);
            const imageData = resp.map(({ alt_text, source_url }) => ({
              alt_text,
              source_url,
            }));
            images.push(...imageData);
          }
        } else {
          // Fetch images for a specific event
          const resp = await fetchData(`media?parent=${eventId}`);
          const imageData = resp.map(({ alt_text, source_url }) => ({
            alt_text,
            source_url,
          }));
          images = imageData;
        }
        setEventImages(images);
      } catch (error) {
        setError("Failed to load event images.");
      } finally {
        setImagesLoading(false);
      }
    };

    getEventImages();
  }, [eventId, eventsData]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-danger">
        Failed to load testimonials.
      </div>
    );
  }

  return (
    <section
      id="workSection"
      className="ascender-dark m-auto py-5 text-white text-center"
    >
      <h1 className="text-bold">Our Work</h1>
      <p>
        Join hands with Ascender Marketing to transform your ideas into
        extraordinary realities. Our work reflects commitment and passion
        towards each event and crafts unforgettable experiences for our clients
        and their audience.
        <br />
        <br />
        Live this excellence of seamless execution and unique solutions that
        have accumulated trust from countless clients. Help us help you make all
        your events shine from intimate gatherings to grand-scale celebrations,
        as we embark on a beautiful journey of chasing dreams!
      </p>

      <div className="d-flex align-items-center justify-content-center mt-5">
        <div
          className={`work-section-button border rounded py-1 px-3 mx-2 pointer ${
            eventId === "all" ? "active" : ""
          }`}
          onClick={() => setEventId("all")}
        >
          All
        </div>
        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`work-section-button border rounded py-1 px-3 mx-2 pointer ${
              eventId === event.id ? "active" : ""
            }`}
            onClick={() => setEventId(event.id)}
          >
            {event.title.rendered}
          </div>
        ))}
      </div>

      <ImageGallery images={eventImages} imagesLoading={imagesLoading} />
    </section>
  );
};

export default OurWork;
