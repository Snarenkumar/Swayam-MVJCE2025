import { NextRequest, NextResponse } from 'next/server';

// In a real application, this would connect to a database
// This is a simplified mock implementation
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, phone, college, usn, eventId, clubName } = data;
    
    if (!name || !phone || !college || !usn || !eventId || !clubName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, we would store this in a database
    console.log('Registration received:', data);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful',
        registrationId: 'REG-' + Math.floor(100000 + Math.random() * 900000) // Generate random registration ID
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
} 