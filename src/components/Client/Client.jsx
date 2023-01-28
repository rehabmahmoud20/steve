const Client = ({client}) => {
  return (
    <div>
        <img src={`${process.env.PUBLIC_URL}${client.image}`} alt="client" />
    </div>
  )
}

export default Client;