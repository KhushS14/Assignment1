type Feedback = {
  type: string;
  message: string;
  insights?: {
    sentiment: string;
    score: number;
    issues: string[];
    suggestion: string;
  };
};

type FeedbackListProps = {
  feedbacks: Feedback[];
};

export default function FeedbackList({ feedbacks }: FeedbackListProps) {
  if (feedbacks.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 text-muted-foreground">
        No feedback yet.
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <h2 className="text-lg font-semibold">User Feedback</h2>

      {feedbacks.map((fb, index) => (
        <div
          key={index}
          className="border border-border rounded-lg p-4 space-y-2"
        >
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
            {fb.type}
          </span>

          <p className="text-sm">{fb.message}</p>

          {fb.insights && (
            <div className="text-xs text-muted-foreground">
              <p>Sentiment: {fb.insights.sentiment}</p>
              <p>Score: {fb.insights.score}/5</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
