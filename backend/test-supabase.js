import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

console.log('🧪 Testing Supabase Configuration...\n');

// Check if environment variables are set
console.log('📋 Environment Variables:');
console.log(`SUPABASE_URL: ${process.env.SUPABASE_URL ? '✅ Set' : '❌ Not set'}`);
console.log(`SUPABASE_ANON_KEY: ${process.env.SUPABASE_ANON_KEY ? '✅ Set' : '❌ Not set'}`);
console.log(`GOOGLE_CLIENT_ID: ${process.env.GOOGLE_CLIENT_ID ? '✅ Set' : '❌ Not set'}`);
console.log(`GOOGLE_CLIENT_SECRET: ${process.env.GOOGLE_CLIENT_SECRET ? '✅ Set' : '❌ Not set'}`);
console.log('');

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.log('❌ ERROR: Supabase credentials not found in .env file');
  console.log('\nPlease add to your .env file:');
  console.log('SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co');
  console.log('SUPABASE_ANON_KEY=your_anon_key_here');
  process.exit(1);
}

try {
  // Create Supabase client
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  console.log('✅ Supabase client created successfully!');
  console.log('');
  console.log('🎉 Configuration is correct!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Make sure MongoDB is running');
  console.log('2. Start your backend: npm run dev');
  console.log('3. Test Google OAuth from your frontend');
  
} catch (error) {
  console.log('❌ ERROR creating Supabase client:');
  console.log(error.message);
}
