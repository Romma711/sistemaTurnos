export function Appointment({ appointment }) {
  return (
    <>
      <div className="flex flex-wrap px-10 mx-4 text-[#450ccb]">
        {appointment.map((appointment) => (
          <div
            className="w-[300px] h-[210px] p-5 mx-6 my-4 bg-[#b7abff] rounded-2xl border-2 border-[#e9e6ff]"
            key={appointment.id}
          >
            <h4 className="text-2xl">{appointment.title}</h4>
            <h4 className="text-lg">Hora: {appointment.time}</h4>
            <h4 className="text-lg">Dia: {appointment.date}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
