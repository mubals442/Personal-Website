import React from "react";

function Biography() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-10 text-White">
        Biography
      </h1>
      <p className="mx-10 text-BoldWhite">
        Getting Buff +1 for learning, Buff +2 for documentation and more buff on
        managing team. Exicited on <span className="text-Blue">React</span>,and{" "}
        <span className="text-Green">Agile Development</span>.
      </p>

      <h1 className="text-center text-2xl font-bold mt-10 text-White">
        What I do
      </h1>
      <p className="mx-10 text-BoldWhite mb-10">
        Build and maintain websites, <span className="text-Green">frontend developer</span> FTW. I also have a
        mentorship called <span className="text-Blue">MOFON</span>. My motto is Beauty and function in equal
        measure as priority.
      </p>
    </div>
  );
}

export default Biography;
