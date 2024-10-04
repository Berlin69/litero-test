interface TextareaProps {
  prompt: string;
  setPrompt: (value: string) => void;
}

export const MainTextarea = ({ prompt, setPrompt }: TextareaProps) => {
  return (
    <textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className="h-[240px] w-full resize-none outline-none placeholder:text-plt-gray custom-y-scroll"
      placeholder="Example:
Topic - climate change over the last 50 years.
Each section should begin with a thesis statement.
An essay should in detail cover climate change facts during this period and its influence on:
- Animals
- Plants
- Human health"
    />
  );
};
