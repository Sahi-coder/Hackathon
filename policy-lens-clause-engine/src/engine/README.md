# Clause Detection & Scoring Engine – Design Notes

## Scoring Rules

- Initial Score: 100
- Each risk category has a fixed weight
- If a category is detected at least once:
  → Deduct its weight ONCE
- Minimum score = 0

## Risk Categories

- Data Sharing → -15
- Tracking & Analytics → -10
- Auto Renewal → -20
- Limited Liability → -15
- Data Retention → -10

## Detection Strategy (Next Phase)

- Split policy text into sentences
- Match keywords case-insensitively
- Store matched sentences per category
- Generate explanations based on matches