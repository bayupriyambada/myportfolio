import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = () => {
  const router = useRouter()
  const menus = [
    {
      label: "About Me",
      link: "/"
    },
    {
      label: "Certification",
      link: "/certification"
    }
  ]

  return (
    <div>
        {menus.map((item, index) => {
          return (
            <div className="flex justify-center items-center gap-3">
              <div>
                <Link href={item.link} className={router.asPath === item.link ? "text-yellow-500 hover:text-slate-300 md:text-base text-sm underline" : "text-slate-50 hover:text-slate-300 md:text-base text-sm hover:underline"} key={index}>
                  {item.label}
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ActiveLink