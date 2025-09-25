type CardTypeProps = {
  icon: any;
  title: any;
  information: any;
  subInformation: string;
};

export default function Card({
  subInformation,
  icon,
  title,
  information,
}: CardTypeProps) {
  return (
    <>
      <section className="card-container">
        {icon ? (
          <>
            <div style={{ fontSize: "64px" }}>🎓</div>
            <p className="card-title">{title}</p>
            <p>{information}</p>
            <p> {subInformation} </p>
          </>
        ) : (
          <>
            <p>
              <div style={{ fontSize: "64px" }}>🎓</div> {title} {information}
            </p>
          </>
        )}
      </section>
    </>
  );
}
