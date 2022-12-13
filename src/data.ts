import { ContentState, EditorState } from 'draft-js'
import { TProject } from './providers/KanbanProvider'

export const data: TProject[] = [
  {
    projectName: 'First project',
    lists: [
      {
        badge: 'To Do',
        badgeColor: '#f58231',
        tasks: [
          {
            title: 'Confirm supplier approval',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Confirm that the selected supplier has approved the product specifications and is ready to begin production.'
              )
            ),
            priority: 'High',
            date: '2022-10-19',
            list: 'To Do',
          },
          {
            title: 'Order materials',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Place an order for the materials needed for the new product line, including any special requirements or specifications.'
              )
            ),
            priority: 'Medium',
            date: '2022-10-22',
            list: 'To Do',
          },
          {
            title: 'Schedule production',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Coordinate with the supplier to schedule production of the new product line, including any necessary inspections or quality checks.'
              )
            ),
            priority: 'Low',
            date: '2022-10-25',
            list: 'To Do',
          },
          {
            title: 'Update project timeline',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Update the project timeline to reflect the scheduled production dates and any potential delays or changes.'
              )
            ),
            priority: 'Low',
            date: '2022-10-28',
            list: 'To Do',
          },
        ],
        isCollapsed: false,
        isColorWheelShown: false,
      },
      {
        badge: 'In progress',
        badgeColor: '#4363d8',
        tasks: [
          {
            title: 'Review supplier quotes',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Review the quotes received from potential suppliers and compare prices and availability.'
              )
            ),
            priority: 'High',
            date: '2022-10-12',
            list: 'In progress',
          },
          {
            title: 'Finalize project budget',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Finalize the project budget based on the quotes received from suppliers and any other relevant information.'
              )
            ),
            priority: 'Medium',
            date: '2022-10-14',
            list: 'In progress',
          },
          {
            title: 'Submit product specifications',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Submit the final product specifications to the selected supplier for review and approval.'
              )
            ),
            priority: 'Low',
            date: '2022-10-17',
            list: 'In progress',
          },
        ],
        isCollapsed: false,
        isColorWheelShown: false,
      },
      {
        badge: 'Done',
        badgeColor: '#3db44b',
        tasks: [
          {
            title: 'Research potential suppliers',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Research potential suppliers for our new product line, including their prices and availability.'
              )
            ),
            priority: 'High',
            date: '2022-10-05',
            list: 'Done',
          },
          {
            title: 'Create project budget',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Create a detailed budget for the new product line, including projected costs for materials, labor, and overhead.'
              )
            ),
            priority: 'Medium',
            date: '2022-10-07',
            list: 'Done',
          },
          {
            title: 'Draft product specifications',
            description: EditorState.createWithContent(
              ContentState.createFromText(
                'Draft detailed specifications for the new product line, including dimensions, materials, and performance criteria.'
              )
            ),
            priority: 'Low',
            date: '10-10-2022',
            list: 'Done',
          },
        ],
        isCollapsed: false,
        isColorWheelShown: false,
      },
    ],
  },
]
