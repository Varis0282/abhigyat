import { useState } from "react";

const Popup = ({ handlePopupClose }) => {

    const [link, setLink] = useState("");
    const [getLinks, setGetLinks] = useState(false);
    const [crawl, setCrawl] = useState(false);

    return (
        <div className="fixed inset-0 bg-[#00000080] z-[1000] flex items-center justify-center">
            <div className="relative p-4 w-full max-w-3xl">
                <div className="relative dark:bg-[#FFFFFF] rounded-lg shadow">
                    {/* Header */}
                    <div className="flex flex-row items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-100 sm:w-auto">
                            Start Crawling
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-100 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handlePopupClose}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Body */}
                    <div className="p-4 md:p-5 space-y-4">
                        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                            <form className="flex flex-col gap-y-4">
                                <div className="relative">
                                    <input
                                        type="url"
                                        id="floating_Link"
                                        className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-200 border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                                        placeholder=" "
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    />
                                    <label
                                        htmlFor="floating_Link"
                                        className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 left-2.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                    >
                                        Enter Dark Web Website URL Here 💀
                                    </label>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <span className="w-1/2">Want to get all the links ?</span>
                                    <span>
                                        <input
                                            type="radio"
                                            id="yesLink"
                                            name="getLinks"
                                            className="peer"
                                            checked={getLinks}
                                            onChange={() => setGetLinks(true)}
                                        />
                                        <label
                                            htmlFor="yesLink"
                                            className="text-sm text-gray-200 ml-2"
                                        >
                                            Yes
                                        </label>
                                    </span>
                                    <span>
                                        <input
                                            type="radio"
                                            id="noLink"
                                            name="getLinks"
                                            className="peer"
                                            checked={!getLinks}
                                            onChange={() => setGetLinks(false)}
                                        />
                                        <label
                                            htmlFor="noLink"
                                            className="text-sm text-gray-200 ml-2"
                                        >
                                            No
                                        </label>
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <span className="w-1/2">Want to Crawl ?</span>
                                    <span>
                                        <input
                                            type="radio"
                                            id="yesCrawl"
                                            name="crawl"
                                            className="peer"
                                            checked={crawl}
                                            onChange={() => setCrawl(true)}
                                        />
                                        <label
                                            htmlFor="yesCrawl"
                                            className="text-sm text-gray-200 ml-2"
                                        >
                                            Yes
                                        </label>
                                    </span>
                                    <span>
                                        <input
                                            type="radio"
                                            id="noCrawl"
                                            name="crawl"
                                            className="peer"
                                            checked={!crawl}
                                            onChange={() => setCrawl(false)}
                                        />
                                        <label
                                            htmlFor="noCrawl"
                                            className="text-sm text-gray-200 ml-2"
                                        >
                                            No
                                        </label>
                                    </span>
                                </div>
                                <div className="text-center">
                                    <button className="bg-sky-400 hover:bg-sky-500 duration-300 text-sky-900 px-4 py-2 rounded-lg">Start Crawling</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;