import React from "react";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";
import SingleService from "./SingleService/SingleService";

const ServiceDetail = () => {
  let { detail } = useParams();
  const [services] = useServices();
  return (
    <div className="text-center mt-5 pt-5">
      <h1 className="title">Service : {detail} Details</h1>
      <div>
        {services
          .filter((item) => parseInt(item.id) === parseInt(detail))
          .map((itemDetail) => (
            <SingleService
              key={itemDetail.id}
              singleService={itemDetail}
            ></SingleService>
          ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
