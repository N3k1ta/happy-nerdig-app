
import { useSearchParams } from 'next/navigation';

export default function Tabs() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const activeTab = tab || 'description'; 

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
          <li className="mr-2" role="presentation">
            <a
              href="?tab=description"
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'description' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
              id="description-tab"
              role="tab"
              aria-controls="description"
              aria-selected={activeTab === 'description'}
            >
              Description
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              href="?tab=tech-info"
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'tech-info' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
              id="tech-info-tab"
              role="tab"
              aria-controls="tech-info"
              aria-selected={activeTab === 'tech-info'}
            >
              Tech Info
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              href="?tab=videos"
              className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'videos' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
              id="videos-tab"
              role="tab"
              aria-controls="videos"
              aria-selected={activeTab === 'videos'}
            >
              Videos
            </a>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div className={`${activeTab === 'description' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="description" role="tabpanel" aria-labelledby="description-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Description tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
        <div className={`${activeTab === 'tech-info' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="tech-info" role="tabpanel" aria-labelledby="tech-info-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Tech Info tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
        <div className={`${activeTab === 'videos' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="videos" role="tabpanel" aria-labelledby="videos-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Videos tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
}
