import './index.css'

export default function App() {
  return (
    <div className="min-h-screen max-w-4xl bg-gray-100 p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">💸</h1>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Venmo Splitter </h1>
      <p className="text-lg text-gray-700 mb-8">
        Split expenses with friends the easy way.
      </p>

      {/* Example form layout */}
      <form className="bg-white shadow-md rounded p-6 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-left text-sm font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="e.g. Dan"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-sm font-semibold mb-2" htmlFor="amount">
            Total Amount
          </label>
          <input
            type="number"
            id="amount"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="$100"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Split It!
        </button>
      </form>
    </div>
  );
}

