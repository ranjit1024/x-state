import React, { useState } from "react";

type FeedbackType = "good" | "bad" | null;

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackType>(null);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setFeedback(null);
    setText("");
    setSubmitted(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => {
          setOpen(true);
          reset();
        }}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Give Feedback
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-lg p-6 rounded-2xl shadow-xl space-y-4">
            
            {/* Step 1 */}
            {!feedback && (
              <>
                <h3 className="text-lg font-semibold text-center">
                  How was your experience?
                </h3>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setFeedback("good")}
                    className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    👍 Good
                  </button>
                  <button
                    onClick={() => setFeedback("bad")}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    👎 Bad
                  </button>
                </div>
              </>
            )}

            {/* Good */}
            {feedback === "good" && (
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">🎉 Thank you!</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-black text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            )}

            {/* Bad - input */}
            {feedback === "bad" && !submitted && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  What can we improve?
                </h3>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Tell us what went wrong..."
                />
                <button
                  onClick={() => {
                    console.log("User feedback:", text);
                    setSubmitted(true);
                  }}
                  className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </div>
            )}

            {/* Bad - submitted */}
            {feedback === "bad" && submitted && (
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">
                  Thanks for your feedback 🙏
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-black text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}