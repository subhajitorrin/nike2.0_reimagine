import React, { useEffect, useState } from "react";
import "./SubPoint.css";
function SubPoint({ sublist }) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    setlist(sublist.item);
  }, []);
  return (
    <div className="subpointscontainer">
      {list.map((item, index) => {
        const len = item.length - 1;
        console.log(len);
        return (
          <div className="rectangle">
            <h4 style={{ textAlign: "center" }}>{item[0]}</h4>
            <ul>
              {item.map((val, index) => {
                return (
                  <li>
                    {
                        index>=1 && <span>{val}</span>
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SubPoint;
