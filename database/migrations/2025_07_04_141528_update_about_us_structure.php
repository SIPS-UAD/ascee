<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('about_us', function (Blueprint $table) {
            // Rename existing column
            $table->renameColumn('description', 'overview');
            
            // Drop existing columns
            $table->dropColumn(['visi_misi', 'people', 'contact']);
            
            // Add new columns
            $table->text('vision')->after('overview');
            $table->text('mission')->after('vision');
            $table->text('corporate_offices')->after('mission');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('about_us', function (Blueprint $table) {
            // Revert column name change
            $table->renameColumn('overview', 'description');
            
            // Remove new columns
            $table->dropColumn(['vision', 'mission', 'corporate_offices']);
            
            // Re-add old columns
            $table->text('visi_misi')->after('description');
            $table->text('people')->nullable()->after('section');
            $table->text('contact')->nullable()->after('people');
        });
    }
};
