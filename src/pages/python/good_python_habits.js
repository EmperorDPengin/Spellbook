import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import Accordion from '../../components/Accordion';
import ExampleBox from '../../components/ExampleBox';
import TipsBox from '../../components/TipsBox';
import Footer from '../../components/Footer'

export default function GoodPythonHabits() {

  const accordionItems = [
    {
      title: 'Habit 1: Use if __name__ == "__main__"',
      content: (
        <div>
          <p>To ensure your code runs correctly when executed directly, but not when imported as a module, use:</p>
          <ExampleBox example={`if __name__ == '__main__':\n    main()`} />
          <p>This prevents functions from running unintentionally.</p>
        </div>
      ),
    },
    {
      title: 'Habit 2: Define a Main Entry Point',
      content: (
        <div>
          <p>Organize your code by defining a main function to serve as the entry point:</p>
          <ExampleBox example={`def main():\n    # Your code here\n\nif __name__ == '__main__':\n    main()`} />
          <p>This makes your code cleaner and easier to read.</p>
        </div>
      ),
    },
    {
      title: 'Habit 3: Keep Functions Simple and Reusable',
      content: (
        <div>
          <p>Avoid complex functions by breaking them down into smaller, reusable parts:</p>
          <ExampleBox example={`def is_adult(age, has_id):\n    return age >= 21 and has_id\n\ndef is_bob(name):\n    return name.lower() == 'bob'`} />
          <p>This increases the reusability and readability of your code.</p>
        </div>
      ),
    },
    {
      title: 'Habit 4: Use Type Annotations',
      content: (
        <div>
          <p>Add type annotations to your code for better documentation and error checking:</p>
          <ExampleBox example={`def greet(name: str) -> str:\n    return f'Hello, {name}'`} />
          <p>This helps prevent bugs and improves code clarity.</p>
        </div>
      ),
    },
    {
      title: 'Habit 5: Use List Comprehensions',
      content: (
        <div>
          <p>Utilize list comprehensions for more concise and readable code:</p>
          <ExampleBox example={`names = ['James', 'Charlotte', 'Stephanie']\nlong_names = [name for name in names if len(name) > 7]`} />
          <p>This makes your code cleaner and more efficient.</p>
        </div>
      ),
    },
  ];

  const tips = [
    "Always test your code in isolation first.",
    "Keep functions small and focused.",
    "Use type annotations to clarify your code.",
    "Use list comprehensions for concise and readable code.",
    "Document your code with meaningful comments."
  ];

  return (
    <div className="spellbook">
      <Head>
        <title>Spells Python - 5 Good Python Habits</title>
      </Head>
      <div className="container">
        <IntroBox title="5 Good Python Habits" summary="These are five good habits that you can build in Python..." />
        <Accordion items={accordionItems} />
        <TipsBox tips={tips} />
        <Footer />
      </div>
    </div>
  );
}
