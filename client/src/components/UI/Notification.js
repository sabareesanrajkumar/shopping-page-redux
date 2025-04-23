const Notification = (props) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
