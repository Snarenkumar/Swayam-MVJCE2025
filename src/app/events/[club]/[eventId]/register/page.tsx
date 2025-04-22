'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { ClubEvent } from '@/types/events';
import { getEventByClubAndId } from '@/data/clubEvents';

export default function RegisterPage() {
  const params = useParams();
  const router = useRouter();
  const { club, eventId } = params;
  
  const [event, setEvent] = useState<ClubEvent | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [usn, setUsn] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Use the central data source to find the event
    const clubName = Array.isArray(club) ? club[0] : String(club || '');
    const eventIdentifier = Array.isArray(eventId) ? eventId[0] : String(eventId || '');
    
    if (!clubName || !eventIdentifier) {
      setError('Invalid club or event ID');
      return;
    }
    
    try {
      const foundEvent = getEventByClubAndId(clubName, eventIdentifier);
      
      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        setError(`Event "${eventIdentifier}" not found for club "${clubName}"`);
      }
    } catch (err) {
      console.error('Error fetching event details:', err);
      setError('Failed to load event details. Please try again later.');
    }
  }, [club, eventId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Basic validation
    if (!name || !phone || !college || !usn) {
      setError('All fields are required');
      setIsSubmitting(false);
      return;
    }

    // Phone number validation
    if (!/^[0-9]{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      // Ensure club and eventId are properly formatted for API request
      const clubName = Array.isArray(club) ? club[0] : String(club || '');
      const eventIdentifier = Array.isArray(eventId) ? eventId[0] : String(eventId || '');
      
      // Submit to our API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          college,
          usn,
          eventId: eventIdentifier,
          clubName: clubName,
          eventName: event?.title
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to register. Please try again.');
      }

      // Show success message
      setSuccessMessage(data.message || 'Registration successful!');
      
      // After 3 seconds, redirect to the club page
      setTimeout(() => {
        router.push(`/events/${clubName}`);
      }, 3000);

    } catch (err: unknown) {
      console.error('Registration error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to register. Please try again later.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error && !event) {
    return (
      <div className="min-h-screen bg-[#F9EFD1] flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
            <p>{error}</p>
            <Link href="/events" className="mt-4 inline-block bg-[#5F4A37] text-white px-6 py-2 rounded">
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-[#F9EFD1] flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-2xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (successMessage) {
    return (
      <div className="min-h-screen bg-[#F9EFD1] flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Redirecting to Payment Gateway</h2>
            {/* <p className="mb-2">Your registration details for {event.title} have been saved.</p> */}
            <p className="mb-4">You will be redirected to the payment gateway shortly.</p>
            <div className="flex justify-center items-center mb-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
            <p className="text-sm text-gray-600 mb-6">Please do not refresh or close this page.</p>
            <div className="flex justify-between">
              <Link href={`/events/${club}`} className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                Cancel
              </Link>
              <Link href={`/events/${club}`} className="inline-block bg-[#5F4A37] text-white px-6 py-2 rounded hover:bg-[#4d3a2d] transition-colors">
                Proceed
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const clubName = Array.isArray(club) ? club[0] : String(club || '');

  return (
    <div className="min-h-screen bg-[#F9EFD1]">
      <NavBar />
      
      {/* Breadcrumb navigation */}
      <div className="py-2 px-4 bg-[#F9EFD1] text-[#5F4A37] border-b border-[#E1DABD]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm breadcrumbs mb-2 md:mb-0">
              <span className="hover:underline">
                <Link href="/events">Events</Link>
              </span>
              {' > '}
              <span className="hover:underline capitalize">
                <Link href={`/events/${clubName}`}>{clubName}</Link>
              </span>
              {' > '}
              <span>{event.title}</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold">SWAYAM 2025</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          {/* Left column - Registration Form only */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-[#FBEAD3] rounded-lg p-6 shadow-md space-y-4">
              <h2 className="text-xl font-bold mb-4 text-[#5F4A37]">Registration Form</h2>
              
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-[#5F4A37] font-medium mb-1">Enter your name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-[#E1DABD] rounded bg-[#F9EFD1] focus:outline-none focus:ring-1 focus:ring-[#5F4A37]"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[#5F4A37] font-medium mb-1">Enter your phone number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-[#E1DABD] rounded bg-[#F9EFD1] focus:outline-none focus:ring-1 focus:ring-[#5F4A37]"
                  placeholder="10-digit phone number"
                  required
                  pattern="[0-9]{10}"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="college" className="block text-[#5F4A37] font-medium mb-1">Enter your college name</label>
                <input
                  type="text"
                  id="college"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full p-3 border border-[#E1DABD] rounded bg-[#F9EFD1] focus:outline-none focus:ring-1 focus:ring-[#5F4A37]"
                  placeholder="Your college name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="usn" className="block text-[#5F4A37] font-medium mb-1">Enter your USN</label>
                <input
                  type="text"
                  id="usn"
                  value={usn}
                  onChange={(e) => setUsn(e.target.value)}
                  className="w-full p-3 border border-[#E1DABD] rounded bg-[#F9EFD1] focus:outline-none focus:ring-1 focus:ring-[#5F4A37]"
                  placeholder="Your USN"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5d4037] text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-[#4d3a2d] transition-colors duration-300 disabled:opacity-70 mt-4 cursor-pointer"
              >
                {isSubmitting ? 'Processing...' : 'PAYMENT'}
              </button>
            </form>
          </div>
          
          {/* Right column - All Event Details */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="bg-[#FBEAD3] rounded-lg p-6 shadow-md h-full">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#5F4A37]">{event.title}</h2>
              
              {/* Registration details card at the top */}
              <div className="mb-8 p-5 bg-[#F5E6C0] rounded-lg border border-[#E1DABD] shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#5F4A37] border-b border-[#E1DABD] pb-2">Registration Details</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-[#5F4A37] w-28">Event:</span>
                    <span className="text-[#5F4A37]">{event.title} ({clubName})</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-[#5F4A37] w-28">Date/Time:</span>
                    <span className="text-[#5F4A37]">{event.date} at {event.time}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-[#5F4A37] w-28">Registration fee:</span>
                    <span className="text-[#5F4A37] font-bold">{event.fee}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mb-8">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={300}
                  className="rounded-lg object-contain max-h-[250px] border-4 border-[#E1DABD] shadow-md"
                />
              </div>
              
              <div className="space-y-6 text-[#5F4A37]">
                <div className="bg-[#F5E6C0] p-4 rounded-lg border border-[#E1DABD]">
                  <h3 className="text-xl font-bold mb-3 border-b border-[#E1DABD] pb-2">Description</h3>
                  <p className="text-[#5F4A37] leading-relaxed">{event.description}</p>
                </div>
                
                <div className="bg-[#F5E6C0] p-4 rounded-lg border border-[#E1DABD]">
                  <h3 className="text-xl font-bold mb-3 border-b border-[#E1DABD] pb-2">Rules</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="leading-relaxed">{rule}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#F5E6C0] p-4 rounded-lg border border-[#E1DABD]">
                  <h3 className="text-xl font-bold mb-3 border-b border-[#E1DABD] pb-2">Prizes</h3>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <span className="font-semibold">1st Prize:</span>
                      <span>{event.prize1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <span className="font-semibold">2nd Prize:</span>
                      <span>{event.prize2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 