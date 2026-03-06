"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ScrollSection({ image, title, description, id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`section ${visible ? "show" : ""}`}>
      <Link href={`/project/${id}`}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="image"
        />
      </Link>

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ScrollSection;

