import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

//! SOURCE
//https://www.sitepoint.com/react-intersection-observer-lazy-load-infinite-scroll-animations/
//https://javascript.plainenglish.io/use-react-to-make-your-images-responsive-a5e6791f19f0
//https://crystallize.com/blog/react-srcset-for-responsive-images
function LazyImage({ src, alt, imageSmall, imageLarge, className, onClick }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    // rootMargin: "0px",
  });

  // console.log("inview:", inView);
  // console.log("isIntersecting:", entry?.isIntersecting);
  // console.log(useInView({}));
  return (
    <picture>
      <source
        media={isMobileMode ? "(max-width: 680px)" : "(min-width: 681px)"}
        srcSet={isMobileMode ? imageSmall : imageLarge}
      />
      <img
        ref={ref}
        // src={inView ? src : ""}
        src={(inView && imageSmall) || imageLarge || src || ""}
        loading="lazy"
        alt={alt}
        className={`lazy-image ${className || ""}`}
        onClick={onClick}
      />
    </picture>
  );
}

export default LazyImage;
