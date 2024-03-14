export function Appointment({ appointment }) {
  return (
    <>
      <div className="flex flex-wrap items-center px-10 mx-auto text-[#450ccb]">
        {appointment.map((appointment) => (
          <div
            className="w-[320px] h-[210px] p-5 mx-6 my-3 rounded-3xl bg-[#210471] text-[#d5d0ff] border-2 border-[#6121ff]"
            key={appointment.id}
          >
            <h4 className="text-2xl">{appointment.title}</h4>
            <h4 className="text-lg">Hora: {appointment.time}</h4>
            <h4 className="text-lg">Dia: {appointment.date}</h4>
            <div className="flex w-full h-[60%] items-center m-auto">
              <button className="w-[70px] h-[40px] bg-[#c4c4c4] px-[20px] mx-[10px] rounded-full"><img src="../assets/edit.svg" alt="" /></button>
              <button className="w-[70px] h-[40px] bg-[#d0c11b] px-[20px] mx-[10px] rounded-full"><img src="../assets/cancel.svg" alt="" /></button>
              <button className="w-[70px] h-[40px] bg-[#d01b1b] px-[20px] mx-[10px] rounded-full"><img src="../assets/delete.svg" alt="" /></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
