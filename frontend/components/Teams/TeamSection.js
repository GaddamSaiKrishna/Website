import React, { useEffect, useState } from "react";
import Tiltle from "../Title";
import TeamCard from "./TeamCard";
import AOS from 'aos';
import 'aos/dist/aos.css';


function TeamSection({ teams, title, year }) {
  const [data, setData] = useState([]);


  useEffect(() => {
//  function to filter the teams data using year prop 
    AOS.init({ duration: 1500 });
    function filterByYear(person) {
      if (person.year === year) {
        return true;
      }
      return false;
    }

    let FilteredArray = teams.filter(filterByYear);
    FilteredArray.sort((a, b) => {
      return a.order - b.order;
    });

    setData(FilteredArray);

  }, [teams , year]);

  return (
    <div className="flex-col  justify-center items-center">
      <Tiltle title={title} font="30" margin="45" />
      <div className="flex flex-wrap justify-center items-center w-full mb-4">
        {data.map(function (d, i) {
          return (
            <TeamCard d={d} key={i} />
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
