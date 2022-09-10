import "./JokePart.scss";

function ContactCard({ setup, punchline }) {
  return (
    <div className="joke-card">
      <div className="info-group">
        <p className="setup">{setup}</p>
      </div>
      <div className="info-group">
        <p className="punchline">{punchline}</p>
      </div>
    </div>
  );
}

export default ContactCard;
