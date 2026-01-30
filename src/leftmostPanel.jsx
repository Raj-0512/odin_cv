function LeftMostPanel({ currentStep, setCurrentStep })
{
    const steps = [
        "Personal Info",
        "Experience",
        "Education",
        "Skills & Summary"
    ];

    function getCategoryClass(step)
    {
        return step === currentStep ? "category active" : "category";
    }

    return (
        <>
            {steps.map(step => (
                <div key={step} className={getCategoryClass(step)}>
                    {step}
                </div>
            ))}
        </>
    );
}

export default LeftMostPanel;
