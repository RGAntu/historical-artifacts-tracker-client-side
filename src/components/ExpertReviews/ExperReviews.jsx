import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Dr. Mia Taylor",
    role: "Professor of Archaeology, Oxford",
    avatar: "https://i.ibb.co.com/yFRLCsfZ/mia-taylor9.jpg",
    rating: 5,
    review:
      "An exemplary catalog. The provenance notes and contextual essays rival major institutions.",
  },
  {
    name: "Curator Jackson lee",
    role: "Senior Curator, Asian Civilisations Museum",
    avatar: "https://i.ibb.co.com/FqYDp7H3/jackson-lee6.jpg",
    rating: 5,
    review:
      "A thoughtful blend of scholarship and accessibility. Ideal for researchers and enthusiasts alike.",
  },
  {
    name: "Dr. Amelia Wilson",
    role: "Cultural Heritage Specialist, UNESCO",
    avatar: "https://i.ibb.co.com/60pzW2Cf/amelia-wilson7.jpg",
    rating: 4,
    review:
      "The collection’s metadata quality and cross-references significantly aid comparative studies.",
  },
];

const ExpertReviews = () => {
  return (
    <section className="bg-base-200 py-12" id="expert-reviews">
      <div className="max-w-7xl mx-auto px-4">
        {/* SEO Rich Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: reviews.map((review, index) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: review.name,
              },
              reviewBody: review.review,
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
                bestRating: "5",
              },
              position: index + 1,
            })),
          })}
        </script>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-base-content">
            Endorsed by Scholars & Curators
          </h2>
          <p className="mt-2 text-base text-base-content/70">
            Independent experts review our collection for authenticity, context,
            and educational value.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300 p-6"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                  itemProp="image"
                />
                <div>
                  <h3
                    className="text-lg font-semibold text-base-content"
                    itemProp="author"
                  >
                    {review.name}
                  </h3>
                  <p
                    className="text-sm text-base-content/70"
                    itemProp="jobTitle"
                  >
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p
                className="text-base text-base-content/80"
                itemProp="reviewBody"
              >
                “{review.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertReviews;
