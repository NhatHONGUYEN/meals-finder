export default function ContactDetails() {
  return (
    <div className="mx-auto w-fit lg:mx-0">
      <h3 className="mb-6 text-center text-xl font-semibold lg:text-left">
        Contact Details
      </h3>
      <ul className="ml-4 list-disc">
        <li>
          <span className="font-bold">Phone : </span>
          <dd className="hover:underline">+33 7 69 57 74 67</dd>
        </li>
        <li>
          <span className="font-bold">Email : </span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            hnnhat67@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
