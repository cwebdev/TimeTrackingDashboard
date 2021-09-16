import './App.css';

function App() {
  return (
    <div className="App h-screen flex flex-col justify-center">   
      <div className="flex h-3/5 bg-gray-50 w-4/5 m-auto">
        <div className="w-1/3 h-full">
          <div className="h-3/5 rounded-md bg-black">
            <div className="bg-profile-logo h-1/2 bg-contain bg-no-repeat bg-center"></div>
            <div className="text-sm text-white">Report for</div>
            <h1 className="text-xl text-white">Jeremy Robson</h1>
          </div>
          <div className="h-2/5 rounded-b-md bg-indigo-800">
            <ul className="h-full">
              <li className="p-2 pl-4 text-left text-white">Daily</li>
              <li className="p-2 pl-4 text-left text-white">Weekly</li>
              <li className="p-2 pl-4 text-left text-white">Monthly</li>
            </ul>
          </div>
        </div>
        
      </div>   

      {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
            <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
      </div> */}


    </div>
  );
}

export default App;
