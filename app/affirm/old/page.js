"use client"  // only use on component if using useState/Effect
import { useState, useEffect } from "react"
import AffirmationsCard from "@/components/AffirmationsCard"
export default function Page() {

  const [affirmations, setAffirmations] = useState()

  useEffect(() => {
    fetch("https://affirm-bc-api.web.app/affirmations")
      .then(res => res.json())
      .then(setAffirmations)
      .catch(alert)
  }, [])


  return (
    <>
      <h1 className="text-3xl font-bold dark:text-amber-200 text-amber-700">
        Old Affirmations
      </h1>
      <section className="container mx-auto px-5 py-24 flex flex-wrap">
        {affirmations && affirmations.map(item => (
          <AffirmationsCard key={item.id} item={item} />
        ))}
      </section>
    </>
  )
}