export default function JoinStart({ onNext }: { onNext: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">이용약관에 동의해주세요</h2>
      <div className="border p-4 mb-4 h-48 overflow-auto">
        <p>여기에 약관 내용이 들어갑니다...</p>
      </div>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mr-2"
        />
        약관에 동의합니다
      </label>
      <button
        disabled={!checked}
        onClick={onNext}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        다음
      </button>
    </div>
  );
}
