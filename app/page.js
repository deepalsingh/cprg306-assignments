import Link from "next/link";


export default function Home() {
  let linkStyles = "underline text-cyan-600 hover:text-cyan-300"
  return (
    <main>

      <h1>
      CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-2/">Week 2 Assignment</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-3/">Week 3 Assignment</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-4/">Week 4 Assignment</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-5/">Week 5 Assignment</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-6/">Week 6 Assignment</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-7/">Week 7 Assignment</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-8/">Week 8 Assignment</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className= {linkStyles} 
        href="/week-9/">Week 9 Assignment</Link>
        </li>
      </ul>

    </main>

  );
}
