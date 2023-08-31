

export default function TagStatus({status}) {

  return (
    <>
      {status === "done" ? (
        <span className="bg-sky-200 py-1 w-20 flex justify-center rounded-full text-xs font-medium text-sky-600">Terminée</span>
      ):(
        <span className="bg-slate-200 py-1 w-20 flex justify-center rounded-full text-xs font-medium text-slate-500 ">A faire</span>
      )}
    </>
  )
}
