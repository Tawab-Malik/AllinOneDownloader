"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Importing icons from React Icons
import Image from "next/image";

export default function FeaturesSection() {
    const [openFaq, setOpenFaq] = useState(null); // State to track which FAQ is open

    const toggleFaq = (index: any) => {
        setOpenFaq(openFaq === index ? null : index); // Toggle the selected FAQ
    };

    return (
        <section className="bg-[#1a022b] text-white py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#240055] to-[#D00096] text-transparent bg-clip-text drop-shadow-[2px_2px_10px_rgb(252, 249,251)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Why Choose Our Instagram Video Downloader?
                </motion.h2>

                <p className="text-lg font-semibold  mb-12">
                    Download Instagram Reels, Videos, and Photos in HD quality with just one click.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
                    {/* Feature 1 */}
                    <motion.div
                        className="p-6 bg-[#541a8a] rounded-lg h-[300px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Image
                            src="/images/howitwork/fast.png"
                            alt="HD Video Download"
                            width={85}
                            height={85}
                            className="rounded-lg w-auto h-auto shadow-lg mx-auto"
                            priority // Ensures the image loads as soon as possible
                        />
                        <h3 className="text-xl font-semibold  mb-3 mt-6">🚀 Fast & Easy</h3>
                        <p className="text-gray-400">Download videos instantly with just one click.</p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="p-6 bg-[#541a8a] rounded-lg h-[300px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Image
                            src="/images/howitwork/hd.png"
                            alt="HD Video Download"
                            width={60}
                            height={60}
                            className="rounded-lg w-auto h-auto shadow-lg mx-auto"
                            priority // Ensures the image loads as soon as possible
                        />
                        <h3 className="text-xl font-semibold  mb-3 mt-6">🎥 HD Quality</h3>
                        <p className="text-gray-400">Get the highest resolution available.</p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="p-6 bg-[#541a8a] rounded-lg h-[300px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <Image
                            src="/images/howitwork/lock.png"
                            alt="HD Video Download"
                            width={60}
                            height={60}
                            className="rounded-lg w-auto h-auto shadow-lg mx-auto"
                            priority // Ensures the image loads as soon as possible
                        />
                        <h3 className="text-xl font-semibold mb-3 mt-6">🔗 No Login Required</h3>
                        <p className="text-gray-400">Just paste the link and download instantly.</p>
                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                        className="p-6 bg-[#541a8a] rounded-lg h-[300px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <Image
                            src="/images/howitwork/device.png"
                            alt="HD Video Download"
                            width={60}
                            height={60}
                            className="rounded-lg w-auto h-auto shadow-lg mx-auto"
                            priority // Ensures the image loads as soon as possible
                        />
                        <h3 className="text-xl font-semibold  mb-3 mt-6">📲 Works on All Devices</h3>
                        <p className="text-gray-400">Mobile, tablet, or desktop – it's fully compatible.</p>
                    </motion.div>
                </div>

                {/* HD Image */}
                <div className="mt-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <Image
                            src="/images/insta1-min.jpg"
                            alt="HD Video Download"
                            width={1200}
                            height={600}
                            className="rounded-lg w-full h-auto shadow-lg mx-auto"
                            priority // Ensures the image loads as soon as possible
                        />
                    </motion.div>
                </div>

                {/* How It Works Section */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-[#240055] to-[#D00096] text-transparent bg-clip-text">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 pt-10">
                        <motion.div
                            className="p-6 bg-[#541a8a] rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                        >
                            <Image src="/images/howitwork/copy.webp" className=" rounded-md w-full" alt="Image" height={300} width={300} />
                            <h3 className="text-xl font-semibold my-3">1️⃣ Copy Link</h3>
                            <p className="text-gray-400">Go to Instagram, copy the Reel URL.</p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-[#541a8a] rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4, duration: 1 }}
                        >
                            <Image src="/images/howitwork/paste.webp" className=" rounded-md w-full" alt="Image" height={300} width={300} />
                            <h3 className="text-xl font-semibold my-3">2️⃣ Paste Link</h3>
                            <p className="text-gray-400">Paste it in the search bar above.</p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-[#541a8a] rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6, duration: 1 }}
                        >
                            <Image src="/images/howitwork/download.webp" className=" rounded-md w-full" alt="Image" height={300} width={300} />
                            <h3 className="text-xl font-semibold my-3">3️⃣ Download</h3>
                            <p className="text-gray-400">Click "Download" and save the video.</p>
                        </motion.div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-[#240055] to-[#D00096] text-transparent bg-clip-text">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                question: "Is it legal to download Instagram videos?",
                                answer:
                                    "Downloading Instagram videos for personal use is generally allowed, but it is important not to re-upload or share content without permission. Always respect copyright and intellectual property rights.",
                            },
                            {
                                question: "Can I download private Instagram videos?",
                                answer:
                                    "No, our tool only works for public posts. Private content cannot be accessed without permission from the account owner.",
                            },
                            {
                                question: "How do I download Instagram Reels or Stories?",
                                answer:
                                    "Simply copy the URL of the Instagram Reel or Story you want to download, paste it into the search bar, and hit 'Download.'",
                            },
                            {
                                question: "Can I download Instagram photos using this tool?",
                                answer:
                                    "Yes, our tool supports downloading Instagram photos as well. Just paste the link of the photo you want to save.",
                            },
                            {
                                question: "Do I need to install any software to use this tool?",
                                answer:
                                    "No, the tool works directly in your web browser. You don’t need to install any software or browser extensions.",
                            },
                            {
                                question: "Can I download videos in different formats?",
                                answer:
                                    "Currently, our tool only downloads videos in MP4 format. We aim to support additional formats in the future.",
                            },
                            {
                                question: "What devices are compatible with this tool?",
                                answer:
                                    "Our Instagram downloader works on all devices, including desktop, mobile, and tablet. It’s fully mobile-friendly!",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                className="p-6 bg-gradient-to-tr to-[#240055] from-[#D00096] rounded-lg"
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 + index * 0.2, duration: 1 }}
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                                    <motion.div
                                        animate={{
                                            rotate: openFaq === index ? 180 : 0,
                                        }}
                                    >
                                        {openFaq === index ? (
                                            <FiChevronUp size={24} />
                                        ) : (
                                            <FiChevronDown size={24} />
                                        )}
                                    </motion.div>
                                </div>

                                {/* Smooth Transition for FAQ Content */}
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: openFaq === index ? 1 : 0,
                                        height: openFaq === index ? "auto" : 0,
                                    }}
                                    transition={{
                                        opacity: { duration: 0.3 },
                                        height: { type: "spring", stiffness: 100, damping: 25 },
                                    }}
                                >
                                    {openFaq === index && (
                                        <p className="text-start text-white mt-2">{faq.answer}</p>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
