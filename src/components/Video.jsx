export default function VideoPage() {
    return (
      <div className="flex justify-center items-center h-80 lg:h-96 bg-gray-100">
        <video  className="w-full h-full max-w-3xl object-cover" controls loop>
          <source src="/videoclip.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }