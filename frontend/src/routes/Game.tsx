import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Game() {
    return (
        <div className="grid grid-cols-[minmax(300px,_1fr)_2fr] h-screen w-full">
            <div className="bg-gray-100 dark:bg-gray-950 p-8 overflow-auto">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Two Sum</h1>
                    <div className="prose prose-stone dark:prose-invert w-full overflow-x-hidden overflow-y-scroll">
                        <p>
                            Given an array of integers <code>nums</code> and an integer <code>target</code>, return{" "}
                            <em>
                                indices of the two numbers such that they add up to <code>target</code>
                            </em>
                            .
                        </p>
                        <p>
                            You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the{" "}
                            <em>same</em> element twice.
                        </p>
                        <p>You can return the answer in any order.</p>
                        <h3>Example 1:</h3>
                        <pre>
                            <code className="code-block">
                                Input: nums = [2, 7, 11, 15], target = 9 Output: [0, 1]
                            </code>
                        </pre>
                        <h3>Example 2:</h3>
                        <pre>
                            <code className="code-block">Input: nums = [3, 2, 4], target = 6 Output: [1, 2]</code>
                        </pre>
                        <h3>Example 3:</h3>
                        <pre>
                            <code className="code-block">Input: nums = [3, 3], target = 6 Output: [0, 1]</code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="bg-gray-950 text-gray-50 p-8 overflow-auto">
                <div className="h-full flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Code Editor</h2>
                    </div>
                    <Textarea
                        className="bg-gray-900 text-gray-50 rounded-md p-4 flex-1 resize-none"
                        placeholder="Write your code here..."
                    />
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">Runtime: 0ms | Memory: 0MB</div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <CopyIcon className="w-5 h-5" />
                                <span className="sr-only">Copy Code</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Tests</h2>
                            <Button variant="ghost" size="icon">
                                <PlayIcon className="w-5 h-5" />
                                <span className="sr-only">Run Tests</span>
                            </Button>
                        </div>
                        <div className="space-y-2 overflow-y-scroll">
                            <div className="flex items-center justify-between bg-gray-900 rounded-md p-4">
                                <div>Test 1: Two Sum with [2, 7, 11, 15] and target 9</div>
                                <div className="text-green-500">Passed</div>
                            </div>
                            <div className="flex items-center justify-between bg-gray-900 rounded-md p-4">
                                <div>Test 2: Two Sum with [3, 2, 4] and target 6</div>
                                <div className="text-green-500">Passed</div>
                            </div>
                            <div className="flex items-center justify-between bg-gray-900 rounded-md p-4">
                                <div>Test 3: Two Sum with [3, 3] and target 6</div>
                                <div className="text-green-500">Passed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CopyIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    )
}


function DownloadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function PlayIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}