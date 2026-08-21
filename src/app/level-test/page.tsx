import LevelTestForm from '../../components/LevelTestForm';

export default function LevelTestPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">English Level <span className="text-brand">Assessment</span></h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Take this comprehensive test to evaluate your English proficiency in grammar, reading, phonics, listening, and translation. Your results will help us recommend the best course for you.</p>
                </div>
                
                <LevelTestForm />
            </div>
        </div>
    );
}
