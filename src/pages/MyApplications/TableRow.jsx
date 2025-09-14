import React from "react";

const TableRow = ({ application, index }) => {
  const {
    applicant,
    linkedIn,
    github,
    resume,
    title,
    company,
    location,
    company_logo,
  } = application;
  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="company logo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{applicant}</td>
      <th>
        <div className="text-sm font-thin">
          {linkedIn} <br /> {github} <br /> {resume}
        </div>
      </th>
    </tr>
  );
};

export default TableRow;
