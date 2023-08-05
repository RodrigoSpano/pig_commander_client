import React from 'react';
import Image from 'next/image';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { HiArrowUpRight } from "react-icons/hi2";
import RecordofExpensesandIncome from '../../../utils/Images/Features Images/RecordofExpensesandIncome.png';
import SavingsandInvestment from '../../../utils/Images/Features Images/SavingsandInvestment.png';
import CustomDashboard from '../../../utils/Images/Features Images/CustomDashboard.png';
import AutomationofMonthlyExpenses from '../../../utils/Images/Features Images/AutomationofMonthlyExpenses.png';
import Limit from '../../../utils/Images/Features Images/Limit.png';
import ProfessionalSubscription from '../../../utils/Images/Features Images/ProfessionalSubscription.png';
import Dashboard from '../../../utils/Images/Features Images/Dashboard.png';
import Budget from '../../../utils/Images/Features Images/Budget.png';
import SavingGoals from '../../../utils/Images/Features Images/SavingGoals.png';
import Tracking from '../../../utils/Images/Features Images/Tracking.png';
import Faq from '../../../utils/Images/Features Images/Faq.png';
import News from '../../../utils/Images/Features Images/News.png';
import Link from 'next/link';


const FeaturesPage = () => {
    return (
        <div className='select-none'>
            <NavBar />
            <div className='py-12'>
                <div className='container mx-auto'>
                    <h1 className='text-5xl font-bold mb-8 text-center '>Features</h1>
                    <p className='text-gray-700 text-base text-center'>
                        Discover all the features that make Pig Commander the most complete and versatile financial application on the market.
                    </p>
                    <p className='text-gray-700 mb-16 text-base text-center'>
                        We have carefully designed each feature so that you can have full control over your financial resources and achieve your financial goals effectively. Here are the highlights:
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='flex items-center justify-center'>
                            <Image src={RecordofExpensesandIncome} alt='Record Expenses' width={400} height={400} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>
                                Record of Expenses and Income
                            </h2>
                            <p className='text-gray-600'>
                                With Pig Commander, keeping detailed track of your financial transactions has never been easier. Record your expenses and income quickly and categorize them to get a clear view of your financial patterns.
                            </p>
                        </div>


                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Savings and Investment</h2>
                            <p className='text-gray-600'>
                                Set savings goals and track your progress over time. With Pig Commander, you'll be able to visualize your investments and assess how they're performing to make informed decisions about your financial future.
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src={SavingsandInvestment} alt='Savings and Investment' width={400} height={400} />
                        </div>

                        <div className='flex items-center justify-center'>
                            <Image src={CustomDashboard} alt='Record Expenses' width={400} height={400} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Custom Dashboard</h2>
                            <p className='text-gray-600'>
                                Access a personalized control panel that will give you a complete view of your finances at a single glance. Interactive graphs will provide you with a visual and understandable representation of your spending and saving habits.
                            </p>
                        </div>


                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Automation of Monthly Expenses</h2>
                            <p className='text-gray-600'>
                                Say goodbye to the repetitive task of entering your monthly expenses manually. Pig Commander allows you to automate the recording of recurring expenses, such as salary, rent, subscriptions and more, so you never miss a financial commitment.
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src={AutomationofMonthlyExpenses} alt='Savings and Investment' width={400} height={400} />
                        </div>

                        <div className='flex items-center justify-center'>
                            <Image src={Limit} alt='Record Expenses' width={400} height={400} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Spending Limit per Month</h2>
                            <p className='text-gray-600'>
                                Keep your finances under control by setting a spending limit per month. You'll receive notifications when you get close to this limit, helping you make more conscious decisions about your spending.
                            </p>
                        </div>


                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Professional Subscription</h2>
                            <p className='text-gray-600'>
                                Explore the full potential of Pig Commander with our premium subscription. Get access to additional features and exclusive benefits to take your finances to the next level.
                            </p>
                            <Link href="/pricing">
                                <p className='flex items-center text-regularPink hover:text-boldPink'>
                                    See more <span className='ml-1'> <HiArrowUpRight /> </span>
                                </p>
                            </Link>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src={ProfessionalSubscription} alt='Savings and Investment' width={400} height={400} />
                        </div>

                        <div className='flex items-center justify-center'>
                            <Image src={Dashboard} alt='Record Expenses' width={400} height={400} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Custom Themes</h2>
                            <p className='text-gray-600'>
                                Personalize your Pig Commander experience by selecting custom themes with our subscription. Adapt the appearance of the application according to your style and preferences.
                            </p>
                        </div>


                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Budget</h2>
                            <p className='text-gray-600'>
                                Create and manage your budget effectively with the help of Pig Commander. Set realistic financial goals and keep your finances on track.
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src={Budget} alt='Savings and Investment' width={600} height={600} />
                        </div>

                        <div className='flex items-center justify-center'>
                            <Image src={SavingGoals} alt='Record Expenses' width={400} height={400} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Savings Goals</h2>
                            <p className='text-gray-600'>
                                Set achievable savings goals and track your progress. Pig Commander will keep you motivated as you get closer and closer to your financial goals.
                            </p>
                        </div>


                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Investment Tracking</h2>
                            <p className='text-gray-600'>
                                Keep a detailed record of your investments and evaluate their performance in real time. Make informed decisions about your future investments with the information you need at your fingertips.
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src={Tracking} alt='Savings and Investment' width={400} height={400} />
                        </div>

                        <div className='flex items-center justify-center'>
                            <Image src={Faq} alt='Record Expenses' width={400} height={400} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Help Section</h2>
                            <p className='text-gray-600'>
                                Find answers to your questions and get support in our help and FAQ section. We are here to help you every step of the way.
                            </p>
                        </div>


                        <div className='flex flex-col justify-center'>
                            <h2 className='text-regularPink text-3xl font-bold mb-4'>Financial News</h2>
                            <p className='text-gray-600'>
                                Stay on top of the latest financial news and trends that may affect your financial decisions. Our news section will keep you informed so you can make smart financial decisions.
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src={News} alt='Savings and Investment' width={400} height={400} />
                        </div>

                    </div>

                    <div className='flex-col items-center justify-center my-16'>
                        <p className='text-gray-700 text-base text-center'>
                            At Pig Commander, we pride ourselves on offering you a wide range of features that will allow you to take control of your finances and achieve your financial goals.
                        </p>
                        <p className='text-gray-700 text-base text-center'>
                            Explore each of these features and start mastering your finances today!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
