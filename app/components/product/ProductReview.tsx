import { StarIcon } from "../icons/Star";
import { VerifiedIcon } from "../icons/Verified";
import { baseColors } from "~/lib/constants";

export const ProductReview = () => {
  const reviews = [
    {
      rating: 5,
      percentage: 30,
      total: 989,
    },
    {
      rating: 4,
      percentage: 40,
      total: "4.5K",
    },
    {
      rating: 3,
      percentage: 20,
      total: 50,
    },
    {
      rating: 2,
      percentage: 16,
      total: 16,
    },
    {
      rating: 1,
      percentage: 8,
      total: 8,
    },
  ];

  const customerFeedbacks = [
    {
      name: "John Watson",
      date: "Nov 01, 2023",
      image: "https://pagedone.io/asset/uploads/1704349572.png",
      feedbackText:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
    },
    {
      name: "Robert Karmazov",
      date: "Nov 01, 2023",
      image: "https://pagedone.io/asset/uploads/1704351103.png",
      feedbackText:
        "Pagedone doesn't disappoint when it comes to the variety and richness of its design components. From pre-built templates to customizable elements, the system caters to both beginners and seasoned designers. The extensive library ensures a diverse range of options to bring creative visions to life.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="w-full">
          <h2 className="font-manrope font-bold text-4xl text-matcha-100 mb-16 text-center font-title">
            Our customer reviews
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="box flex flex-col gap-y-4 w-full">
              {reviews.map((review, index) => (
                <div className="flex items-center w-full" key={index}>
                  <p className="font-medium text-lg text-black mr-1">
                    {review.rating}
                  </p>
                  <StarIcon size={20} color={baseColors.stars[1]} />
                  <p className="h-2 w-full sm:min-w-[278px] rounded-3xl bg-gray-100 ml-5 mr-3">
                    <span
                      className={`h-full w-[${review.percentage}%] rounded-3xl bg-matcha-300 flex`}
                    ></span>
                  </p>
                  <p className="font-medium text-lg text-black mr-0.5">
                    {review.total}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-matcha-footer rounded-3xl flex items-center justify-center flex-col">
              <h2 className="font-manrope font-bold text-5xl text-matcha-300 mb-2">
                4.3
              </h2>
              <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <StarIcon key={index} size={60} color={baseColors.stars[1]} />
                ))}
              </div>
              <p className="font-medium text-xl leading-8 text-gray-900 text-center">
                46 Ratings
              </p>
            </div>
          </div>

          {customerFeedbacks.map((feedback, index) => (
            <div
              className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto"
              key={index}
            >
              <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-1">
                    <h6 className="font-semibold text-lg leading-8 text-matcha-100">
                      {feedback.name}
                    </h6>
                    <div className="w-1 h-1 bg-gray-400 rounded-full mx-1"></div>
                    <span className="font-light text-lg leading-8 text-gray-400">
                      3
                    </span>
                    <StarIcon size={20} color={baseColors.stars[1]} />
                    <div className="w-1 h-1 bg-gray-400 rounded-full mx-1"></div>
                    <span className="font-light text-sm leading-8 text-gray-400">
                      Verified Buyer
                    </span>
                    <VerifiedIcon size={20} color={baseColors.matcha[400]} />
                  </div>
                </div>
                <p className="font-normal text-md leading-8 text-gray-400">
                  {feedback.date}
                </p>
              </div>
              <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">
                {feedback.feedbackText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
