import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // const single = services
  //   ?.filter((item) => item.id === 1)
  //   ?.map((itemDetail) => console.log(itemDetail));
  // console.log(single);
  return [services, setServices];
};

export default useServices;
