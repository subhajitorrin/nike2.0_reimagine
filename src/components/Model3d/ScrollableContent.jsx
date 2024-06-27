import React from 'react';

const ScrollableContent = () => {
  return (
    <div className="bg-transparent pt-screen"> {/* pt-screen pushes content below the model */}
      <section className="h-screen p-8">
        <h2 className="text-2xl font-bold mb-4">Section 1</h2>
        <p>This is the content for section 1...</p>
      </section>
      <section className="h-screen p-8">
        <h2 className="text-2xl font-bold mb-4">Section 2</h2>
        <p>This is the content for section 2...</p>
      </section>
      <section className="h-screen p-8">
        <h2 className="text-2xl font-bold mb-4">Section 3</h2>
        <p>This is the content for section 3...</p>
      </section>
    </div>
  );
};

export default ScrollableContent;