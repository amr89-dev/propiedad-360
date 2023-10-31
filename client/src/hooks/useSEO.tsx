import { useEffect } from "react";

const useSEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
};

export default useSEO;
