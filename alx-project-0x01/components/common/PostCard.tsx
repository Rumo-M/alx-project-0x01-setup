import Image from 'next/image';

export default function PostCard() {
  return (
    <div className="border rounded p-4 shadow">
      <Image
        src="/assets/images/sample.jpg" // this file should go in public/assets/images
        alt="Sample Post"
        width={400}
        height={250}
        className="rounded"
      />
      <h2 className="text-lg font-semibold mt-2">Post Title</h2>
      <p className="text-sm text-gray-600">Post description goes here...</p>
    </div>
  );
}
